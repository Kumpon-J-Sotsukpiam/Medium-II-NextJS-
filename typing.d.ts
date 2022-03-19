export interface Post {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    author: Author;
    body: Body[];
    categories: any[];
    mainImage: MainImage;
    slug: Slug;
    title: string;
}
export interface Author {
    _ref: string;
    _type: string;
}

export interface Child {
    _key: string;
    _type: string;
    marks: any[];
    text: string;
}

export interface Body {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface MainImage {
    _type: string;
    asset: Asset;
}

export interface Slug {
    _type: string;
    current: string;
}