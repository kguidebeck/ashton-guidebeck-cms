import { BsFillHouseDoorFill } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import { RiPagesFill, RiPagesLine } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

// deskStructure.js
export default (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .icon(BsFillHouseDoorFill)
        .child(S.document().schemaType("page_home").documentId("page_home")),
      S.listItem()
        .title("Resume")
        .icon(IoDocumentText)
        .child(
          S.document().schemaType("page_resume").documentId("page_resume")
        ),
      S.listItem()
        .title("Contact")
        .icon(MdMarkEmailUnread)
        .child(
          S.document().schemaType("page_connect").documentId("page_connect")
        ),
      S.divider(),
      S.listItem()
        .title("Blog Overview")
        .icon(RiPagesFill)
        .child(S.document().schemaType("page_blog").documentId("page_blog")),
      S.listItem()
        .title("Blog Posts")
        .icon(RiPagesLine)
        .child(S.documentTypeList("post")),
      S.divider(),
      // S.listItem()
      //   .title("Settings")
      //   .icon(VscSettingsGear)
      //   .child(
      //     S.editor()
      //       .id("settings")
      //       .schemaType("settings")
      //       .documentId("settings")
      //   ),
    ]);
