//this method extends custom selecctize to 
//give an ability to process sccroll event in dropdown and 
//download options if scroll is in bottom of the dropdown
$.fn.lazySelectize = function (settings) {
    var self = {};
    self.loadItemsUrl = settings.loadItemsUrl;
    self.index = 0;
    self.scrollpos = -1;
    self.selectize = {};
    self.runprocess = true;
    self.pageIndex = 1;
    self.isChanged = false;
    self.convertArrayToOptions = settings.convertArrayToOptions;
    if (settings.onDropdownClose != undefined) {
        self.onDropdownClose = settings.onDropdownClose;
    } else {
        self.onDropdownClose = function() {
        };
    }
    self.additionalUrlParams = settings.additionalUrlParams == undefined ? "" : settings.additionalUrlParams;

    self.pageOffset = settings.pageOffset;
    self.disableScore = settings.disableScore;
    self.valueField = settings.valueField;
    this.selectize({
        preload: settings.preload,
        valueField: self.valueField,
        load: function(query, callback) {
            self.runprocess = false;
            $.ajax({
                url: self.loadItemsUrl + "?keyword=" + encodeURIComponent(query) + self.additionalUrlParams,
                type: 'GET',
                error: function() {
                    callback();
                },
                success: function(data) {
                    self.selectize.clearOptions();
                    self.selectize.refreshOptions(false);
                    self.selectize.$dropdown_content.scrollTop(0);
                    self.runprocess = true;
                    self.pageIndex = 1;
                    callback(self.convertArrayToOptions(data));
                }
            });
        },
        onDropdownOpen: function($dropdown) {
            self.selectize.$dropdown_content.unbind("scroll");

            self.selectize.$dropdown_content.scroll(function() {
                if (self.selectize.getValue() == "") {
                    self.processScroll(this);
                }
            });
        },
        onDropdownClose: self.onDropdownClose,
        sortField: settings.sortField
    });

    self.selectize = this.selectize()[0].selectize;
    if (self.disableScore) {
        self.selectize.sifter.getScoreFunction = function(query) {
            return function(query) {
                return 1;
            };
        };
    }

    self.processScroll = function (obj) {
        self.selectize.$dropdown_content.unbind("keydown");
        self.scrollpos = self.selectize.$dropdown_content.scrollTop();
        if (self.runprocess &&( $(obj).scrollTop() + $(obj).innerHeight() >= obj.scrollHeight)) {
            self.runprocess = false;
            self.pageIndex++;
            self.selectize.$control.parent().addClass('loading');
            var keyword = self.isChanged ? self.selectize.lastQuery : "";
            $.ajax({
                url: self.loadItemsUrl + "?keyword=" + encodeURIComponent(keyword) + "&index=" + self.pageIndex + self.additionalUrlParams,
                type: 'GET',
                error: function () {
                },
                success: function (data) {
                    var options = self.convertArrayToOptions(data);
                    for (var i = 0; i < options.length; i++) {
                        self.selectize.addOption(options[i]);
                    }
                    self.selectize.refreshOptions(false);
                    self.runprocess = true;
                    self.selectize.$control.parent().removeClass('loading');
                    self.selectize.$dropdown_content.scrollTop(self.scrollpos);
                }
            });
        }
    };

    self.reloadOptionsData = function() {
        $.ajax({
            url: self.loadItemsUrl + "?keyword=" + encodeURIComponent("") + "&index=" + self.pageIndex + self.additionalUrlParams,
            type: 'GET',
            error: function () {
            },
            success: function (data) {
                self.selectize.clearOptions();
                self.scrollpos=0;
                var options = self.convertArrayToOptions(data);
                for (var i = 0; i < options.length; i++) {
                    self.selectize.addOption(options[i]);
                }
                self.selectize.refreshOptions(false);
                self.runprocess = true;
                self.selectize.$control.parent().removeClass('loading');
                self.selectize.$dropdown_content.scrollTop(self.scrollpos);
            }
        });
    }

    $(self.selectize.$control_input[0]).on('keydown', function () {
        self.isChanged = true;
    });

    return self;
}

// IE11 fix
Selectize.prototype['trigger'] = function (event /* , args... */) {
    this._events = this._events || {};
    if (event in this._events === false) return;
    for (var i = 0; this._events != undefined && i < this._events[event].length; i++) {
        this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
}