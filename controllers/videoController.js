import { video } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", video});
}

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, video});
};

export const videos = (req, res) => res.render("videos", {pageTitle: "Vidoes"});

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete video"});
