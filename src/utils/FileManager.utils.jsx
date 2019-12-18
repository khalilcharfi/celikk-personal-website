import { isWebpSupported } from "react-image-webp/dist/utils";

const importAll = r => r.keys().map(r);

export const IMAGE_EXTENSION = isWebpSupported() ? ".webp" : ".png";

export const folders = Object.freeze({
  ongoingProjectImages: importAll(
    require.context(`../data/images/ongoingProjects`, false, /\.(png|svg)$/)
  ),
  personalSkillImages: importAll(require.context(`../data/images/personalSkills`, false, /\.png$/)),
  projectImages: importAll(require.context(`../data/images/projects`, false, /\.png$/)),
  blogFiles: importAll(require.context("../blog", false, /\.md$/)),
  heroImages: importAll(require.context("../data/images/hero", false, /\.jpg$/))
});

export const mapFileNameToId = (fileName, fileArray) => {
  for (let i = 0; i < fileArray.length; i += 1) {
    if (fileArray[i].indexOf(fileName) !== -1) {
      return fileArray[i].substring(fileArray[i].lastIndexOf("/") + 1);
    }
  }
  return null;
};
