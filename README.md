# ufacm.xyz

### Running the server
```
npm start
```

### Running the dev server (recompile on change)
```
npm run dev
```

This does a few things (in parallel):

1. runs Webpack to compile the React JSX into one file (index.js),
2. starts the server, and
3. has Webpack watch for changes and recompile

**When running the server, use `Ctrl-C` to quit, not `Ctrl-Z`.**
Otherwise the npm process not halt, and will remain bound to port 3000 and you will not be able to restart the server!
