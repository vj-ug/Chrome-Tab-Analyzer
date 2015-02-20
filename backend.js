function TabCounter() {}


TabCounter.$ = function(id) {
    return document.getElementById(id);
}
 
TabCounter.prototype.view = function() {
 
    chrome.windows.getAll({
        populate: true
    }, function(windows) {
        //get the windows
        nowWind = windows.length;

        nowTabs = 0;
        for (var i in windows) {
            nowTabs += windows[i].tabs.length
        }
 
 
        TabCounter.$('nowTabs')
            .innerHTML = nowTabs;
        TabCounter.$('nowWind')
            .innerHTML = nowWind;
 
 
    });
 
};
 
 
 
//Create new instance of tabcounter (global)
tc = new TabCounter();
 
//Lisen to opeing tabs
chrome.tabs.onCreated.addListener(function(tab) {
    tc.tabOpened(tc, tab);
});
 
function initVieuw() {
 
    tc.view()
}
 
document.addEventListener('DOMContentLoaded', initVieuw);
 
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
