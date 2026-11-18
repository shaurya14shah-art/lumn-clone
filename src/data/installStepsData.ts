export const installStepsData = [
  {
    step: 1,
    title: "Download the Installer",
    description: "Get the latest DMG package from our releases page.",
    code: "curl -O https://dl.trylumn.xyz/latest/Lumn.dmg"
  },
  {
    step: 2,
    title: "Mount and Install",
    description: "Open the downloaded DMG and drag Lumn into your Applications folder.",
    code: "sudo hdiutil attach Lumn.dmg\ncp -R /Volumes/Lumn/Lumn.app /Applications"
  },
  {
    step: 3,
    title: "Launch and Authenticate",
    description: "Open Lumn from Spotlight and log in to sync your presets.",
    code: "open -a Lumn"
  }
];
