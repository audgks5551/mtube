import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const video = await Video.find({});
        res.render("home", { pageTitle: "Home", video });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", video: [] });
    }
    
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, video});
};

export const videos = (req, res) => res.render("videos", {pageTitle: "Vidoes"});

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));

  console.log(path, title, description);
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete video"});
