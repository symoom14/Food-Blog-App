export const lightTheme = {
  // Layout backgrounds
  background: "#ffffff",          // main screen background
  cardBackground: "#f1f5f9",      // used in stats screen cards
  modalBackground: "#ffffff",

  // Text colors
  textPrimary: "#111111",         // general content text
  textSecondary: "#555555",       // subtitles, less emphasis
  textMuted: "#666666",           // meta info like date, calories
  textInverse: "#ffffff",         // text on dark background (banners, modals)

  // Borders & dividers
  borderLight: "#ccc",
  borderDark: "#4a4a4a",          // search input placeholder

  // Buttons & Icons
  accent: "#f77502",              // icon + button color (image picker, highlights)
  success: "#0bb825",             // green add/save button
  danger: "red",                  // red delete button
  buttonBackground: "#faebde",    // light orange buttons
  buttonSecondary: "#e4f0fd",     // blue sort/edit buttons
  buttonDeleteBackground: "#ffeaea",
  buttonBackgroundImagePicker: "rgba(250, 235, 222, 0.9)",  // semi-transparent light orange
  errorBackground: "#ffe9ea",     // delete button background on entry cards and edit entry pages
  entrycardBackground: "#fff",
  historyscreenbackground: "#f1f5f9",

  // Inputs
  inputBackground: "#ddd",
  inputBorder: "#0290f5",
  inputText: "#000",
  inputFocusedBorder: "#007bff", 

  // Misc
  star: "#FFD700",                // gold rating star
  calendar: "#d9dadb",            // calendar placeholder input
  linkColor: "#03a353",           // restaurant name link in view entry page

  success: "green",
  successBackground: "#daf7e7",

  primary: "#007bff",        // Blue
  textOnPrimary: "white",    // White text on blue

  textPrimary: "#000",
  placeholder: "#888",
  inputBackground: "#fff",
  inputText: "#000",
  inputBorder: "#ccc",

  searchBarBorder: "#d9dadb",
  searchBarBackground: "#d9dadb",
  searchBarText: "#000",
  searchBarPlaceholder: "#4a4a4a",
  sortButtonBackground: "#e4f0fd",
  sortButtonText: "#1a50d2",

  statCardBackground: "#f1f5f9",
  statCardTitle: "#444",
  statCardValue: "#000",
  statRowBackground: "#f5f5f5",

  tabBarBackground: "#ffffff",
};

export const darkTheme = {
  // Layout backgrounds
  background: "#000000",          // set to pure black for OLED advantage
  cardBackground: "#1f1f1f",      // dark gray card background
  modalBackground: "#000000",

  // Text colors
  textPrimary: "#ffffff",         // white text for contrast
  textSecondary: "#bbbbbb",       // lighter gray for secondary text
  textMuted: "#aaaaaa",           // even lighter gray for meta info
  textInverse: "#000000",         // text on dark background (banners, modals)

  // Borders & dividers
  borderLight: "#444444",         // dark border
  borderDark: "#4a4a4a",          // dark search input placeholder

  // Buttons & Icons
  accent: "#f77502",              // icon + button color (image picker, highlights)
  success: "#0bb825",             // green add/save button
  danger: "red",                  // red delete button
  buttonBackground: "#444444",    // darker button background
  buttonSecondary: "rgba(228,240,253,0.9)",     // secondary button color
  buttonDeleteBackground: "#770000", // red delete button
  buttonBackgroundImagePicker: "rgba(250, 235, 222, 1)",  // semi-transparent light orange
  addentryBackground: "#daf7e7",    // background for the Add Entry button
  errorBackground: "rgba(255,233,234,0.8)",     // delete button background on entry cards and edit entry pages
  entrycardBackground: "#1f1f1f",
  historyscreenbackground: "#000000",
  
  // Inputs
  inputBackground: "#333333",     // dark background for inputs
  inputBorder: "#444444",         // dark border for inputs
  inputText: "#ffffff",           // white text for inputs

  // Misc
  star: "#FFD700",                // gold rating star
  calendar: "#d9dadb",            // calendar placeholder input
  linkColor:"#22f58c",

  success: "green",
  successBackground: "#0bb825",

  primary: "#007bff",        // Blue
  textOnPrimary: "white",    // White text on blue

  textPrimary: "#ffffff",    // white primary text
  placeholder: "#888888",    // placeholder text
  inputBackground: "#333333", // dark background for input fields
  inputText: "#ffffff",      // white text in input fields
  inputBorder: "#444444",    // dark borders for inputs

  searchBarBorder: "#444444", // dark search bar border
  searchBarBackground: "#444444", // search bar background color
  searchBarText: "#ffffff",    // white text in search bar
  searchBarPlaceholder: "#bbbbbb", // lighter placeholder text in search bar
  sortButtonBackground: "#e4f0fd",
  sortButtonText: "#1a50d2",
  
  statCardBackground: "#1f1f1f", // dark card background
  statCardTitle: "#ffffff",     // white title text
  statCardValue: "#ffffff",     // white value text

  statRowBackground: "#333333", // dark row background

  tabBarBackground: "#111111",

};
