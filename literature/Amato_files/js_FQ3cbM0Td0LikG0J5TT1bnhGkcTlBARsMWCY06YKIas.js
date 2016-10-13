jQuery(document).ready(function() {
  var groupClasses = new Array();
  jQuery('.search-result.solr-grouped').each(function(index, item){
    item = jQuery(item)
    currentGroupClass = item.attr('class').substr(item.attr('class').lastIndexOf('solr-group-'));
    if(jQuery.inArray(currentGroupClass, groupClasses) < 0) {
      groupClasses.push(currentGroupClass);
    }
  });

  jQuery.each(groupClasses, function(index, item) {
    currentGroup = jQuery('.search-result.solr-grouped.' + item);
    currentGroup.wrapAll('<li id="' + item + '-all" />');
    currentGroup.wrapAll('<ol class="apachesolr_search-results-grouped search-results-grouped">');
    jQuery('#' + item + '-all').prepend('<span>Group: ' + item.replace('solr-group-', '') +'</span>');
  });
});
;
/**
 * @file
 * Loads report blocks via ajax.  This is done because the API requests to Google
 * Analytics can add signifigant latency to page loads otherwise.
 */
(function ($) {

Drupal.behaviors.googleAnalyticsReports = {
  attach: function (context, settings) {
    $('#block-google-analytics-reports-path-mini,#block-google-analytics-reports-dashboard', context).show();

    if ($('.google-analytics-reports-path-mini', context).length) {
      $.ajax({
        url: Drupal.settings.googleAnalyticsReportsAjaxUrl + '/path-mini',
        dataType: 'json',
        data: ({ path: window.location.pathname + window.location.search }),
        success: function(data) {
          $('.google-analytics-reports-path-mini', context).html(data.content).hide().slideDown('fast');
        },
        error: function(data) {
          // @TODO
        }
      });
    }

    if ($('.google-analytics-reports-dashboard', context).length) {
      $.ajax({
        url: Drupal.settings.googleAnalyticsReportsAjaxUrl + '/dashboard',
        dataType: 'json',
        success: function(data) {
          $('.google-analytics-reports-dashboard', context).html(data.content).hide().slideDown('fast');
        },
        error: function(data) {
          // @TODO
        }
      });
    }
  }
}

})(jQuery);;
(function($) {
  Drupal.behaviors.marketo_ma = {
    attach: function(context, settings) {
      if (typeof settings.marketo_ma !== 'undefined' && settings.marketo_ma.track) {
        jQuery.ajax({
          url: document.location.protocol + settings.marketo_ma.library,
          dataType: 'script',
          cache: true,
          success: function() {
            Munchkin.init(settings.marketo_ma.key);
            if (typeof settings.marketo_ma.actions !== 'undefined') {
              jQuery.each(settings.marketo_ma.actions, function() {
                Drupal.behaviors.marketo_ma.marketoMunchkinFunction(this.action, this.data, this.hash);
              });
            }
          }
        });
      }
    },
    marketoMunchkinFunction: function(leadType, data, hash) {
      mktoMunchkinFunction(leadType, data, hash);
    }
  };

})(jQuery);
;
