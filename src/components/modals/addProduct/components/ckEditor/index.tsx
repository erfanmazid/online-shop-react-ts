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
  control: Control<FieldValues>;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
}

const CustomCKEditor: React.FC<CustomCKEditorProps> = ({
  name,
  control,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
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
