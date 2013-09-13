/**
 * Main app singleton
 * @type {Object}
 */
var APP = {

    /**
     * Keeps track of the current screen
     * @type {Object}
     */
    currentController: null, // Active view Controller

    /**
     * The main app window or navigation
     * @type {Object}
     */
    masterWindow:null, // Main Container Window
    container:null, // Reference to the view container (to add/remove mor views: currentController.getView())
    headerbar:null, // HeaderBar Controller
    menubar:{}, // MenuBar Controller
    tempVar:0,

    /**
     * Sets up the app singleton and all it's child dependencies
     * NOTE: This should only be fired in index controller file and only once.
     */

    init: function(_scenario) {
        if(_scenario == 1)
            APP.masterWindow = Alloy.createController('MainWindow/MainWindow');
        else if(_scenario == 2)
            APP.masterWindow = Alloy.createController('MainWindow/CarlMainWindow');
        else if(_scenario == 3)
            APP.masterWindow = Alloy.createController('MainWindow/SuzMainWindow');
    },

    /**
     * Global event handler to change screens
     * @param  {Object} _event Params for this navigation event
     * @example
     * {
     *      controller: String The controller name to load
     * }
     */

    handleNavigation: function(path,_params) {
        //Ti.API.info( path );
        if(path !== null) {
            // Remove current controller view
            APP.removeCurrentScreen(function() {

                // Instantiate the screen controller
                APP.currentController = Alloy.createController(path,_params);

                // Add the new screen to the window
                APP.container.add( APP.currentController.getView() );
            });
        } else {
            //Ti.API.error("@APP.handleNavigation() - Index is undefined");
        }
    },

    /**
     * Global function to remove screens
     * @param {Function} _callback
     */

    removeCurrentScreen: function(_callback) {
        if(APP.currentController) {
            APP.container.remove(APP.currentController.getView());
            APP.currentController = null;
        }

        if(typeof(_callback) !== "undefined") {
            _callback();
        }
    },

    /**
     * Global function to change the tile screens
     * @param {string} name
     */
    /*handleTitle:function(name){
        APP.headerbar.children[0].text=name;
    },*/

    /**
     * Global network event handler
     */

    networkObserverUpdate: function() {},

    /**
     * Pause event observer
     */

    pause:function(){}, 

    /**
     * Exit event observer
     */

    exit: function(){},

    /**
     * Resume event observer
     */

    resume: function(){},

    //Database
    getLastInsertByAlloyId : function(rcvCollection,rcvId,rcvIdName){ 
            //collection name, alloy_id (model.id), id column name in the model.
            var projectInfo = Alloy.Collections.instance(rcvCollection);
            projectInfo.fetch();
            var lastProject = projectInfo.where({alloy_id:rcvId});
            if(lastProject != null && lastProject.length > 0){
                return lastProject[0].get(rcvIdName);
            } else{
                return -1;
            }
             
    }

};

module.exports = APP;