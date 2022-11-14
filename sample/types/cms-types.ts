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
  category: Reference<T,unknown>
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
  relatedNews?: Reference<T,unknown>[]
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
