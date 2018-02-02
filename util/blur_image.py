from PIL import Image, ImageFilter

img = Image.open("../public/images/lib5.jpg")
blurred_image = img.filter(ImageFilter.BLUR)
blurred_image.save("../public/images/lib5_blurred.png")
