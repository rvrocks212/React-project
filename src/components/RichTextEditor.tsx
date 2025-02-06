import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertToRaw,
  ContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import "./RichTextEditor.css";

// Import Material UI Icons
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import CodeIcon from "@mui/icons-material/Code";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ImageIcon from "@mui/icons-material/Image";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Handle inline styling (Bold, Italic, Underline, Monospace)
  const handleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Handle block styles (Lists, Alignments)
  const handleBlockStyle = (style: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, style));
  };

  // Insert Image
  const addImage = () => {
    const url = prompt("Enter Image URL:");
    if (url) {
      const contentState = editorState.getCurrentContent();
      const contentWithEntity = contentState.createEntity("IMAGE", "IMMUTABLE", { src: url });
      const entityKey = contentWithEntity.getLastCreatedEntityKey();
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, " ");
      setEditorState(newEditorState);
    }
  };

  // Add Link
  const addLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      const contentState = editorState.getCurrentContent();
      const contentWithEntity = contentState.createEntity("LINK", "MUTABLE", { url });
      const entityKey = contentWithEntity.getLastCreatedEntityKey();
      const newEditorState = RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey);
      setEditorState(newEditorState);
    }
  };

  // Remove Link
  const removeLink = () => {
    setEditorState(RichUtils.toggleLink(editorState, editorState.getSelection(), null));
  };

  return (
    <div className="rich-text-editor">
      <div className="editor-toolbar">
        {/* Inline styles */}
        <button onClick={() => handleInlineStyle("BOLD")} title="Bold">
          <FormatBoldIcon />
        </button>
        <button onClick={() => handleInlineStyle("ITALIC")} title="Italic">
          <FormatItalicIcon />
        </button>
        <button onClick={() => handleInlineStyle("UNDERLINE")} title="Underline">
          <FormatUnderlinedIcon />
        </button>
        <button onClick={() => handleInlineStyle("CODE")} title="Monospace">
          <CodeIcon />
        </button>

        {/* Block styles */}
        <button onClick={() => handleBlockStyle("unordered-list-item")} title="Bullets">
          <FormatListBulletedIcon />
        </button>
        <button onClick={() => handleBlockStyle("ordered-list-item")} title="Numbered List">
          <FormatListNumberedIcon />
        </button>
        <button onClick={() => handleBlockStyle("left")} title="Align Left">
          <FormatAlignLeftIcon />
        </button>
        <button onClick={() => handleBlockStyle("center")} title="Align Center">
          <FormatAlignCenterIcon />
        </button>
        <button onClick={() => handleBlockStyle("right")} title="Align Right">
          <FormatAlignRightIcon />
        </button>
        <button onClick={() => handleBlockStyle("justify")} title="Justify">
          <FormatAlignJustifyIcon />
        </button>

        {/* Image & Links */}
        <button onClick={addImage} title="Add Image">
          <ImageIcon />
        </button>
        <button onClick={addLink} title="Add Link">
          <LinkIcon />
        </button>
        <button onClick={removeLink} title="Remove Link">
          <LinkOffIcon />
        </button>
      </div>

      <div className="editor-container">
        <Editor editorState={editorState} onChange={setEditorState} placeholder="Start typing..." />
      </div>
    </div>
  );
};

export default RichTextEditor;






