const { ipcRenderer } = require("electron");

(function() {
  $("#hitokoto-value").val(store.get('hitokoto'));
  $("#autoSpeak1").val(store.get('autoSpeak1'));
  $("#autoSpeak2").val(store.get('autoSpeak2'));
})();

$(".save").click(() => {
  const val = $("#hitokoto-value").val();
  const autoSpeak1 = $("#autoSpeak1").val();
  const autoSpeak2 = $("#autoSpeak2").val();
  ipcRenderer.send("setting-hitokoto", {
    hitokotoValue: val,
    autoSpeak1: autoSpeak1,
    autoSpeak2: autoSpeak2
  });
});

$(".close").click(() => {
  hideSettingWindow();
});

// hide setting window.
function hideSettingWindow() {
  ipcRenderer.send("hide-setting-window");
}
