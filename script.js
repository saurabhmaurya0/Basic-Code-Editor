var codeEditor = document.getElementById('codeEditor');
var lockUnlockButton = document.getElementById('lockUnlockButton');
var isLocked = true;

function copyCode() {
    var textToCopy = codeEditor.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(function() {
            alert('Code copied to clipboard');
        })
        .catch(function(err) {
            console.error('Copy failed: ', err);
        });
}

function saveCode() {
    // Replace this with code to save the content to a server or a file.
    alert('Code saved');
}

function lockUnlockCode() {
    if(isLocked){
        codeEditor.style.display = 'block';
        isLocked= false;
    }
    else{
        codeEditor.style.display = 'none';
        isLocked= true;

    }
    isLocked = isLocked;
    codeEditor.contentEditable = isLocked;
    lockUnlockButton.innerText = !isLocked ? 'Lock' : 'Unlock';
}