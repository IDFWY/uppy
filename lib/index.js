'use strict';

var Core = require('./core');

// Parent
var Plugin = require('./core/Plugin');

// Orchestrators
var Dashboard = require('./plugins/Dashboard');

// Acquirers
var Dummy = require('./plugins/Dummy');
var DragDrop = require('./plugins/DragDrop');
var FileInput = require('./plugins/FileInput.js');
var GoogleDrive = require('./plugins/GoogleDrive');
var Dropbox = require('./plugins/Dropbox');
var Instagram = require('./plugins/Instagram');
var Webcam = require('./plugins/Webcam');

// Progressindicators
var StatusBar = require('./plugins/StatusBar');
var ProgressBar = require('./plugins/ProgressBar.js');
var Informer = require('./plugins/Informer.js');

// Modifiers

// Uploaders
var Tus = require('./plugins/Tus');
var XHRUpload = require('./plugins/XHRUpload');
var Transloadit = require('./plugins/Transloadit');
var AwsS3 = require('./plugins/AwsS3');

// Helpers and utilities
var GoldenRetriever = require('./plugins/GoldenRetriever');
var ReduxDevTools = require('./plugins/ReduxDevTools');
var ReduxStore = require('./plugins/Redux');

module.exports = {
  Core: Core,
  Plugin: Plugin,
  Dummy: Dummy,
  StatusBar: StatusBar,
  ProgressBar: ProgressBar,
  Informer: Informer,
  DragDrop: DragDrop,
  GoogleDrive: GoogleDrive,
  Dropbox: Dropbox,
  Instagram: Instagram,
  FileInput: FileInput,
  Tus: Tus,
  XHRUpload: XHRUpload,
  Transloadit: Transloadit,
  AwsS3: AwsS3,
  Dashboard: Dashboard,
  Webcam: Webcam,
  GoldenRetriever: GoldenRetriever,
  ReduxDevTools: ReduxDevTools,
  ReduxStore: ReduxStore
};
//# sourceMappingURL=index.js.map