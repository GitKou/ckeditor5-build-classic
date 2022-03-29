declare module '@lc-nut/ckeditor5-custom-build' {


	// Type definitions for @ckeditor/ckeditor5-build-classic 29.0
	// Project: https://ckeditor.com/docs/ckeditor5/latest/builds/index.html
	// Definitions by: Federico Panico <https://github.com/fedemp>
	// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
	// Minimum TypeScript Version: 4.3
	import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

	import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
	import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
	import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
	import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
	import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
	import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
	import Image from "@ckeditor/ckeditor5-image/src/image.js";
	import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
	import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
	import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
	import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
	import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
	import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
	import Link from "@ckeditor/ckeditor5-link/src/link.js";
	import List from "@ckeditor/ckeditor5-list/src/list.js";
	import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
	import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
	import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
	import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
	import Table from "@ckeditor/ckeditor5-table/src/table.js";
	import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
	import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";


	export default class CustomBuildEditor extends ClassicEditorBase {
		static builtinPlugins: [
			typeof Autoformat,
			typeof BlockQuote,
			typeof Bold,
			typeof CloudServices,
			typeof Essentials,
			typeof FullScreen,
			typeof Heading,
			typeof Image,
			typeof ImageCaption,
			typeof ImageStyle,
			typeof ImageToolbar,
			typeof ImageUpload,
			typeof Indent,
			typeof Italic,
			typeof Link,
			typeof List,
			typeof MediaEmbed,
			typeof Paragraph,
			typeof PasteFromOffice,
			typeof SimpleUploadAdapter,
			typeof Table,
			typeof TableToolbar,
			typeof TextTransformation,
		];
		static defaultConfig: {
			toolbar: {
				items: [
					"heading",
					"|",
					"bold",
					"italic",
					"link",
					"bulletedList",
					"numberedList",
					"|",
					"outdent",
					"indent",
					"|",
					"imageUpload",
					"blockQuote",
					"insertTable",
					"mediaEmbed",
					"undo",
					"redo",
					'fullscreen'
				],
			},
			image: {
				toolbar: [
					"imageTextAlternative",
					"imageStyle:inline",
					"imageStyle:block",
					"imageStyle:side",
				],
			},
			table: {
				contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
			},
			simpleUpload: {
				// The URL that the images are uploaded to.
				uploadUrl: "/api/common/file/upload",

				// Enable the XMLHttpRequest.withCredentials property.
				withCredentials: true,

				// Headers sent along with the XMLHttpRequest to the upload server.
				headers: {
					"access-token": string,
				},
			},
			language: string;
		};
	}

}
