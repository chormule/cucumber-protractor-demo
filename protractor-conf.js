exports.config = {

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 50000,  
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },  
  specs: [
    'features/*.feature'
  ], 

  cucumberOpts: {
    require: [ 'features/step_definitions/*.js', 'features/support/*.js'],
    format: 'json'   
  },

  baseUrl: 'https://chormule.github.io/'  

};