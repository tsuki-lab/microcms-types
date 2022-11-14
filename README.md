# microcms-types

This repository is a fork of "[SoraKumo001/microcms-typescript](https://github.com/SoraKumo001/microcms-typescript)" with personal improvements.

## description

Convert [MicroCMS](https://microcms.io/) schema to TypeScript type definitions.

## usage

`microcms-types src-dir [dist-file]`

Use the file name as the type name.
If there are multiple schema files with the same type name, the one with the latest date will be used for conversion.

## For output types

api-news-20220809124324.json -> cms-types.ts

```json
{
  "apiFields": [
    {
      "idValue": "VKz2DRAfju",
      "fieldId": "category",
      "name": "カテゴリー",
      "kind": "relation",
      "required": true,
      "referenceDisplayItem": "1VeK3PU3N_"
    },
    {
      "fieldId": "title",
      "name": "タイトル",
      "kind": "text",
      "required": true,
      "isUnique": false
    },
    {
      "fieldId": "contents",
      "name": "内容",
      "kind": "repeater",
      "required": false,
      "customFieldCreatedAtList": [
        "2022-08-04T10:38:53.943Z",
        "2022-08-04T10:39:29.580Z",
        "2022-08-04T10:39:58.343Z",
        "2022-08-04T10:42:16.565Z"
      ]
    },
    {
      "fieldId": "coverImage",
      "name": "カバー画像",
      "kind": "media"
    },
    {
      "fieldId": "relatedNews",
      "name": "関連お知らせ",
      "kind": "relationList",
      "relationListCountLimitValidation": {
        "relationListCount": {
          "min": null,
          "max": 4
        }
      }
    }
  ],
  "customFields": [
    {
      "createdAt": "2022-08-04T10:38:53.943Z",
      "fieldId": "richEditor",
      "name": "リッチエディタ",
      "fields": [
        {
          "idValue": "QwamnszSrV",
          "fieldId": "content",
          "name": "リッチエディタ",
          "kind": "richEditor",
          "required": true,
          "richEditorOptions": [
            "headerOne",
            "headerTwo",
            "headerThree",
            "headerFour",
            "headerFive",
            "paragraph",
            "bold",
            "italic",
            "underline",
            "strike",
            "code",
            "align",
            "blockquote",
            "codeBlock",
            "listOrdered",
            "listBullet",
            "scriptSub",
            "scriptSuper",
            "link",
            "clean",
            "background",
            "color"
          ]
        }
      ],
      "position": [["QwamnszSrV"]],
      "updatedAt": "2022-08-04T10:38:53.943Z",
      "viewerGroup": "sHm"
    },
    {
      "createdAt": "2022-08-04T10:39:29.580Z",
      "fieldId": "html",
      "name": "HTML",
      "fields": [
        {
          "idValue": "c7v6zV4889",
          "fieldId": "content",
          "name": "HTML",
          "kind": "textArea",
          "required": true
        }
      ],
      "position": [["c7v6zV4889"]],
      "updatedAt": "2022-08-04T10:39:29.580Z",
      "viewerGroup": "sHm"
    },
    {
      "createdAt": "2022-08-04T10:39:58.343Z",
      "fieldId": "markdown",
      "name": "Markdown",
      "fields": [
        {
          "idValue": "btwzYdGABV",
          "fieldId": "content",
          "name": "Markdown",
          "kind": "textArea",
          "required": true
        }
      ],
      "position": [["btwzYdGABV"]],
      "updatedAt": "2022-08-04T10:39:58.343Z",
      "viewerGroup": "sHm"
    },
    {
      "createdAt": "2022-08-04T10:42:16.565Z",
      "fieldId": "image",
      "name": "画像",
      "fields": [
        {
          "idValue": "4I7jyhflyT",
          "fieldId": "alt",
          "name": "代替えテキスト",
          "kind": "text",
          "required": false
        },
        {
          "idValue": "lOJ2zuaOTA",
          "fieldId": "image",
          "name": "画像",
          "kind": "media",
          "required": true
        },
        {
          "idValue": "YC8kzTVSbG",
          "fieldId": "objectPosition",
          "name": "object-position",
          "kind": "select",
          "description": "デフォルト：left",
          "required": false,
          "selectItems": [
            {
              "id": "oQQfRu9-n_",
              "value": "left"
            },
            {
              "id": "40o7UswJdO",
              "value": "center"
            },
            {
              "id": "2ZqkHNAk3P",
              "value": "right"
            }
          ],
          "multipleSelect": false
        },
        {
          "idValue": "RFs_h45DyX",
          "fieldId": "objectFit",
          "name": "object-fit",
          "kind": "select",
          "description": "デフォルト：contain",
          "selectItems": [
            {
              "id": "eXVsWcYh0H",
              "value": "contain"
            },
            {
              "id": "CYNYkudZ_T",
              "value": "cover"
            }
          ],
          "multipleSelect": false
        },
        {
          "idValue": "hybmG472uS",
          "fieldId": "height",
          "name": "height",
          "kind": "number",
          "description": "デフォルト：400"
        }
      ],
      "position": [
        ["lOJ2zuaOTA", "4I7jyhflyT"],
        ["YC8kzTVSbG", "RFs_h45DyX", "hybmG472uS"]
      ],
      "updatedAt": "2022-08-09T03:43:03.181Z",
      "viewerGroup": "sHm"
    }
  ]
}

```

```ts
type Reference<T, R> = T extends 'get' ? R : string | null;
type GetsType<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & P
  : GetsType<{ id: string } & DateType & P>;

export type NewsRaw<T='get'> = Structure<
T,
{
  /**
   * カテゴリー
   */
  category: Reference<T,NewsCategoriesRaw>
  /**
   * タイトル
   */
  title: string
  /**
   * 内容
   */
  contents?: (CustomFieldNewsRichEditor | CustomFieldNewsHtml | CustomFieldNewsMarkdown | CustomFieldNewsImage)[]
  /**
   * カバー画像
   */
  coverImage?: { url: string, width: number, height: number }
  /**
   * 関連お知らせ
   */
  relatedNews?: Reference<T,NewsRaw>[]
}>

export type CustomFieldNewsRichEditor = {
  fieldId: 'richEditor'
  /**
   * リッチエディタ
   */
  content: string
}
export type CustomFieldNewsHtml = {
  fieldId: 'html'
  /**
   * HTML
   */
  content: string
}
export type CustomFieldNewsMarkdown = {
  fieldId: 'markdown'
  /**
   * Markdown
   */
  content: string
}
export type CustomFieldNewsImage = {
  fieldId: 'image'
  /**
   * 代替えテキスト
   */
  alt?: string
  /**
   * 画像
   */
  image: { url: string, width: number, height: number }
  /**
   * object-position
   */
  objectPosition?: ['left' | 'center' | 'right']
  /**
   * object-fit
   */
  objectFit?: ['contain' | 'cover']
  /**
   * height
   */
  height?: number
}

export type EndPoints = {
  get: {
    'news': NewsRaw<'get'>
  }
  gets: {
    'news': NewsRaw<'gets'>
  }
}
```
