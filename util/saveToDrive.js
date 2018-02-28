var google = require('googleapis');
var googleAuth = require('google-auth-library');
var fs = require('fs');
var path = require('path');

var OAuth2 = google.auth.OAuth2;

var appDir = path.dirname(require.main.filename);
const CLIENT_SECRET_PATH = path.join(appDir, '../credentials/client_secret.json');
const AUTH_TOKEN_PATH = path.join(appDir, '../credentials/drive_write_auth_token.json');
const RESUME_FOLDER_ID_PATH = path.join(appDir, '../credentials/resume_folder_id.json');

module.exports = {
  /**
   * Pipes a ReadStream (fs.createReadStream()) to the google drive using tokens declared above.
   * @param {ReadStream} readStream The file to get saved to drive.
   * @param {String} name The filename for drive.
   */
  saveFile(readStream, name, res) {
    
    // get id of resume folder from JSON file
    const idFile = fs.readFileSync(RESUME_FOLDER_ID_PATH);
    const resumeFolderId = JSON.parse(idFile).resumeFolderId; 

    // read client_secret.json for OAuth credentials
    fs.readFile(CLIENT_SECRET_PATH, function processClientSecrets(err, content) {
      if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
      }
      authorize(JSON.parse(content), (auth) => save(auth, readStream, name, resumeFolderId, res));
    });
  }
}

/**
 * Reads the AUTH_TOKEN and creates an OAuth2 client with credentials and those found in AUTH_TOKEN.
 * Calls callback(OAuth2Client) on success.
 * @param {Object} credentials JSON.parse(client_secret.json)
 * @param {Function} callback callback(oauth2Client) gets called at the end (on success).
 */
function authorize(credentials, callback) {
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
  
    // Check if we have previously stored a token.
    fs.readFile(AUTH_TOKEN_PATH, function(err, token) {
      if (err) {
        console.log("TOKEN NOT FOUND");
      } else {
        oauth2Client.credentials = JSON.parse(token);
        callback(oauth2Client);
      }
    });
  }

/**
 * Saves the file to the google drive. 
 * Don't call this function -- use wrapper saveFile(readStream, name) instead!
 * @param {OAuth2} auth An authenticated OAuth2 object with Drive write access.
 * @param {ReadStream} readStream The fileStream to read from.
 * @param {String} name The filename (for Drive).
 * @param {String} resumeFolderId The id of the Drive folder to save to.
 */
function save(auth, readStream, name, resumeFolderId, res) {
    var drive = google.drive({version: 'v3', auth: auth});

    var fileMetadata = {
      'name': name,
      parents: [resumeFolderId],
    };
    
    var media = {
      mimeType: 'image/jpeg',
      body: readStream,
    };

    drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, function (err, file) {
      if (err) {
        console.error(err);
        res.send({success: false});
      }
    });
};