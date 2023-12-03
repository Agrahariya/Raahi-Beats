// Profile Modal Open
let nav_profileIcon = document.querySelector(".nav_profileIcon");
let profileModal = document.querySelector(".profileModal");

nav_profileIcon.addEventListener("click", () => {
  profileModal.classList.toggle("showProfileModal");
});

window.addEventListener("click", (e) => {
  if (!e.target.matches(".nav_profileIcon")) {
    if (profileModal.classList.contains("showProfileModal")) {
      profileModal.classList.remove("showProfileModal");
    }
  }
});

//side navbar code
let sideNavbar = document.querySelector(".sideNavbar");
let fetch_sideNavItem = document.querySelectorAll(".sideNavItem");
let allMainContainers = document.querySelector(".mainFrame").children;

Array.from(allMainContainers).forEach((e) => {
  e.style.display = "none";
});
allMainContainers[0].style.display = "";
Array.from(fetch_sideNavItem).forEach((ele) => {
  ele.addEventListener("click", () => {
    let fetch_sideNavItemTitle = ele.children[1].innerHTML;
    console.log(fetch_sideNavItemTitle);
    Array.from(allMainContainers).forEach((e) => {
      let target = e.id.slice(0, fetch_sideNavItemTitle.length);
      if (target.toLowerCase() == fetch_sideNavItemTitle.toLowerCase()) {
        e.style.display = "";
        document.querySelector(".mainFrame").scrollTop = 0;
      } else {
        e.style.display = "none";
      }
    });
  });
});

//NAVBAR BLUR
let navbar = document.getElementsByTagName("nav")[0];
let mainFrame = document.querySelector(".mainFrame");
mainFrame.addEventListener("scroll", (event) => {
  if (mainFrame.scrollTop >= navbar.clientHeight) {
    navbar.style.backdropFilter = "blur(100px)";
  } else {
    navbar.style.backdropFilter = "";
  }
});

//home section code

// SONG CONTAINER
// let topSongContainer = document.querySelector(".topSongContainer");
// topSongContainer.addEventListener("mousemove", (e) => {
//   topSongContainer.style.backgroundPosition = `${-e.x * 0.03}px ${
//     -e.y * 0.03
//   }px`;
// });

// ARTIST MAIN CONTAINER
let Circular = document.querySelector(".Circular");
document.querySelector(".mainFrame").addEventListener("scroll", (e) => {
  if (document.querySelector("#artistsMainContainer").style.display != "none") {
    if (Circular.getBoundingClientRect().top <= window.innerHeight / 3) {
      Circular.style.animation =
        "fade-in 0.5s 1s forwards cubic-bezier(0.11, 0, 0.5, 0)";
    }
  }
});

//Genre Container
let genreSection1Text_genreCardList = Array.from(
  document.querySelectorAll(".genreSection1Text_genreCard")
);

const checkGenreVis = () => {
  if (document.querySelector(".genreMainContainer").style.display != "none") {
    genreSection1Text_genreCardList.forEach((e) => (e.style.opacity = "0"));

    setTimeout(() => {
      genreSection1Text_genreCardList.forEach((e) => {
        e.style.opacity = "1";
      });
    }, 3000);
  } else {
    genreSection1Text_genreCardList.forEach((e) => {
      e.style.opacity = "0";
    });
    window.requestAnimationFrame(checkGenreVis);
  }
};

window.requestAnimationFrame(checkGenreVis);

///for genre LINE
document.querySelector(".mainFrame").addEventListener("scroll", () => {
  if (
    document.querySelector(".genreSection2").getBoundingClientRect().top <=
    window.innerHeight
  ) {
    document.querySelector(".genreSection2_line").style.height =
      (window.innerHeight -
        document.querySelector(".genreSection2").getBoundingClientRect().top) /
        1.1 +
      "px";
  }
});

// MOUSE POINTER
let mouseCursor = document.querySelector(".mouseCursor");
window.addEventListener("mousemove", (e) => {
  mouseCursor.style.top = e.y + "px";
  mouseCursor.style.left = e.x + "px";
});

if (window.innerWidth <= 480) mouseCursor.style.display = "none";

//THEMES

const theme = {
  raahiBeats: {
    baseIconColor: "linear-gradient(45deg, #33081b, #122131)",
    body_Background: "linear-gradient(45deg, #33081b, #122131)",
    nav_boxShadow: "1px 1px 20px black",
    nav_logoText_color: "white",
    nav_searchInput_color: "white",
    nav_searchInput_borderBottom: "1px solid white",
    nav_profileModal_backgroundColor: "white",
    nav_profileModal_color: "black",
    sideNavbar_backgroundColor: "rgba(0, 0, 0, 0.35)",
    sideNavbar_sideNavItem_color: "white",
    mainFrame_color: "white",
    mainFrame_hero__text_span_span_color: "#ffffff",
    mainFrame_hero__text_span_h1_color: "#ffffff",
    homeMainContainerBackground: "linear-gradient(93deg, #33081b, #122131)",
    brandnewNewReleaseSection1_background:
      "linear-gradient(93deg, #33081b, #122131)",
    newReleaseContainer_background: "linear-gradient(93deg, #33081b, #122131)",
    footer_backgroundColor: "#18181d",
    footer_color: "#cccaca",
    artistMainContainer_backgroundColor: "black",
    likedMainContainer_background: "#000",
    likedSec1_backgroundColor: "#000",
    mouseCursor_background: "rgba(255, 0, 85, 0.658)",
  },
  raahiBeatsTheme2: {
    baseIconColor: "linear-gradient(28deg, #8b125e, #0f2650)",
    body_Background: "linear-gradient(28deg, #8b125e, #0f2650)",
    nav_boxShadow: "1px 1px 20px black",
    nav_logoText_color: "white",
    nav_searchInput_color: "white",
    nav_searchInput_borderBottom: "1px solid white",
    nav_profileModal_backgroundColor: "grey",
    nav_profileModal_color: "white",
    sideNavbar_backgroundColor: "rgba(0, 0, 0, 0.35)",
    sideNavbar_sideNavItem_color: "white",
    mainFrame_color: "white",
    mainFrame_hero__text_span_span_color: "#ffffff",
    mainFrame_hero__text_span_h1_color: "#ffffff",
    homeMainContainerBackground: "linear-gradient(93deg, #8b125e, #0f2650)",
    brandnewNewReleaseSection1_background:
      "linear-gradient(93deg, #8b125e, #0f2650)",
    newReleaseContainer_background: "linear-gradient(93deg, #8b125e, #0f2650)",
    footer_backgroundColor: "#18181d",
    footer_color: "#cccaca",
    artistMainContainer_backgroundColor: "black",
    likedMainContainer_background: "#000",
    likedSec1_backgroundColor: "#000",
    mouseCursor_background: "rgb(18 195 196 / 74%)",
  },
};

let themeContainer = document.querySelector(".themes");
for (let [themeName, values] of Object.entries(theme)) {
  let theme_colour_div = document.createElement("div");
  theme_colour_div.classList.add("theme_colour");
  theme_colour_div.style.background = values.baseIconColor;
  theme_colour_div.setAttribute("id", themeName);
  themeContainer.appendChild(theme_colour_div);
}
let theme_colour_btnList = document.querySelectorAll(".theme_colour");
Array.from(theme_colour_btnList).forEach((themeBtn) => {
  themeBtn.addEventListener("click", () => {
    let themeName = themeBtn.getAttribute("id");
    if (themeName == "raahiBeats") {
      setTheme(theme.raahiBeats);
    } else if (themeName == "raahiBeatsTheme2") {
      setTheme(theme.raahiBeatsTheme2);
    }
  });
});

let setTheme = (theme) => {
  console.log(theme.body_Background);
  let body = document.body;
  let nav = document.getElementsByTagName("nav")[0];
  let logoText = document.querySelector(".logoText");
  let searchInput = document.querySelector(".searchInput");
  let profileModal = document.querySelector(".profileModal");
  let sideNavbar = document.querySelector(".sideNavbar");
  // let sideNavItem = document.querySelector('.sideNavItem');
  let mainFrame = document.querySelector(".mainFrame");
  let hero__text_span = document.querySelector(".hero__text span");
  let hero__text_h1 = document.querySelector(".hero__text h1");
  let homeMainContainer = document.querySelector(".homeMainContainer");
  let brandnewNewReleaseSection1 = document.querySelector(
    ".brandnewNewReleaseSection1"
  );
  let newReleaseContainer = document.querySelectorAll(".newReleaseContainer");
  let footer = document.querySelector(".footer");
  let artistsMainContainer = document.querySelector(".artistMainContainer");
  let likedMainContainer = document.querySelector(".likedMainContainer");
  let likedSec1 = document.querySelector(".likedSec1");
  let mouseCursor = document.querySelector(".mouseCursor");

  body.style.background = theme.body_Background;
  nav.style.boxShadow = theme.nav_boxShadow;
  logoText.style.color = theme.nav_logoText_color;
  searchInput.style.color = theme.nav_searchInput_color;
  searchInput.style.borderBottom = theme.nav_searchInput_borderBottom;
  profileModal.style.backgroundColor = theme.nav_profileModal_backgroundColor;
  profileModal.style.color = theme.nav_profileModal_color;
  sideNavbar.style.backgroundColor = theme.sideNavbar_backgroundColor;
  // sideNavItem.style.color = theme.sideNavbar_sideNavItem_color;
  mainFrame.style.color = theme.mainFrame_color;
  hero__text_span.style.color = theme.mainFrame_hero__text_span_span_color;
  hero__text_h1.style.color = theme.mainFrame_hero__text_span_h1_color;
  homeMainContainer.style.background = theme.homeMainContainerBackground;
  brandnewNewReleaseSection1.style.background = theme.brandnewNewReleaseSection1_background;
  newReleaseContainer.forEach(e=>e.style.background = theme.newReleaseContainer_background);
  console.log(newReleaseContainer)
  footer.style.backgroundColor = theme.footer_backgroundColor;
  footer.style.color = theme.footer_color;
  artistsMainContainer.style.backgroundColor =
    theme.artistMainContainer_backgroundColor;
  likedMainContainer.style.background = theme.likedMainContainer_background;
  likedSec1.style.backgroundColor = theme.likedSec1_backgroundColor;
  mouseCursor.style.background = theme.mouseCursor_background;
};
