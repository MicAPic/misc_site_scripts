function hide(id) {
  let object = document.getElementById("c" + id),
      object_tab = document.getElementById(id),
      containers = document.querySelectorAll('[id^="ctab"]'),
      tabs = document.querySelectorAll('[id^="tab"]');
  if (object.style.display === "none") {
   for(var container = 0; container < containers.length; ++container) {
           containers[container].style.display = "none";
        }
    for(var tab = 0; tab < tabs.length; ++tab) {
           tabs[tab].style.color = "a0a0a0";
           tabs[tab].style.borderBottom = "4px solid transparent";
        }
    object.setAttribute("style", "display: grid;\n" +
        "\tgap: 45px 183px;\n" +
        "\tgrid-template-columns: 405px 405px;\n" +
        "\tjustify-content: center;\n" +
        "\tmargin-top: -835px;");
    object_tab.style.color = "white";
    object_tab.style.borderBottom = "4px solid white";
  }
}
