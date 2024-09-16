import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CustomCKEditorProps {
  name: string;
  controls: Control<
    {
      category: string;
      subcategory: string;
      name: string;
      price: string;
      quantity: string;
      brand: string;
      discount: string;
      description: string;
      thumbnail: undefined;
    },
    undefined
  >;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
}

const CustomCKEditor: React.FC<CustomCKEditorProps> = ({
  name,
  controls,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={controls}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          config={{
            language: "fa",
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "|",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "insertTable",
              "uploadImage",
              "mediaEmbed",
              "|",
              "undo",
              "redo",
            ],
            image: {
              toolbar: [
                "imageStyle:full",
                "imageStyle:side",
                "|",
                "imageTextAlternative",
              ],
            },
            table: {
              contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
          }}
          onChange={(_event: unknown, editor: ClassicEditor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      )}
    />
  );
};

export default CustomCKEditor;
