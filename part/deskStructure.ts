import { BsFillHouseDoorFill } from "react-icons/bs";
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
        .title("Cirriculum Vitae")
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
    ]);
