// duck-event: click, change, load
// duck-action: duck-hide, duck-show, duck-check, duck-uncheck, duck-remove

$(document).on('ready', function(){
  var $click = $('[psyduck-event="click"]'),
      $change = $('[psyduck-event="change"]');
  const actions = [
        'duck-hide',
        'duck-show',
        'duck-toggle',
        'duck-remove'
      ];
  function runActions($el){
    for (i = 0; i < actions.length; i ++ ){
      var option = actions[i],
          actionVal = $el.attr(option),
          $actionVal = $(actionVal);
      if (actionVal){
        var action = option.split('-')[1];

        if(action == "hide"){
          $actionVal.hide();
        }else if(action == "show"){
          $actionVal.show();
        }else if(action == "toggle"){
          $actionVal.toggle();
        }else if(action == "remove"){
          $actionVal.remove();
        }
      }
    }
  }
  $click.on('click', function(){
    runActions($(this));
  });
  $change.on('change', function(){
    runActions($(this));
  });
});
