$(document).ready(function() {
  var memeNames = memes.map(function(memeObject) {
    return memeObject.name;
  });

  var selectedTemplate;
  var $inputForm = $('#input');
  var $memeTemplates = $('#meme-templates');
  memeNames.forEach(function(memeName) {
    var $elem = $('<li>');
    $elem.text(memeName);

    var $button = $('<input type="radio" name="template">');
    $button.attr('value', memeName);
    $button.on('change', function(event) {
      selectedTemplate = event.target.value;
    });
    $button.appendTo($elem);

    var $preview = $('<img>');
    $preview.attr('src', 'images/' + memeName + '.jpg');
    $preview.attr('width', 100);
    $preview.appendTo($elem);

    $elem.appendTo($memeTemplates);
  });

  var $topTextInput = $('<input type="text" name="topText" id="top-text">');
  var $topTextLabel = $('<label for="top-text">Top Text</label>');
  var $bottomTextInput = $('<input type="text" name="bottomText" id="bottom-text">');
  var $bottomTextLabel = $('<label for="bottom-text">Bottom Text</label>');
  var $submitButton = $('<input type="submit" value="Make me beautiful">');

  $inputForm.append(
    $topTextLabel,
    $topTextInput,
    $bottomTextLabel,
    $bottomTextInput,
    $submitButton
  );

  $inputForm.on('submit', function(event) {
    event.preventDefault();
    var topText = $topTextInput.val();
    var bottomText = $bottomTextInput.val();
    generateMeme(topText, bottomText, selectedTemplate);
  });

  var generateMeme = function(topText, bottomText, template) {
    var $output = $('#output');
    $output.empty();
    var $baseImage = $('<img>');
    $baseImage.attr('src', 'images/' + template + '.jpg');
    var $topText = $('<div class="top">');
    $topText.text(topText);
    var $bottomText = $('<div class="bottom">');
    $bottomText.text(bottomText);

    $output.append($baseImage, $topText, $bottomText);
  };
});