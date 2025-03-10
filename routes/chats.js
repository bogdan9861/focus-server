const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const audio = require("../middleware/audio");
const allFiles = require("../middleware/allFiles");
const image = require("../middleware/file");
const {
  create,
  send,
  getMessagesByChatId,
  get,
  getById,
  removeById,
  sendVoice,
  sendFile,
  update,
  addUserToChat,
  removeUserFormChat
} = require("../controllers/chats");

router.post("/upload/voice", auth, audio.single("audio"), sendVoice);
router.post("/upload/file", auth, allFiles.single("file"), sendFile);
router.post("/create", auth, image.single("photo"), create);
router.post("/update", auth, image.single("photo"), update);
router.post("/addUser", auth, addUserToChat);

router.post("/history", auth, getMessagesByChatId);
router.post("/send", auth, send);
router.post("/getById", auth, getById);

router.post("/get", auth, get);

router.delete("/remove/:id", auth, removeById);
router.delete("/removeUser", auth, removeUserFormChat);

module.exports = router;
