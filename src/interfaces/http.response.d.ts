// 内容返回数据
export declare interface IContentResponse {
    city: string;
    gps: string;
    meettime: string;
    meetaddress: string;
    meetingintro: string;
    timeline: string;
    applyintro: string;
    imageUrlCount: number;
    videoUrlCount: number;
    fileUrlCount: number;
    addressimgCount: number;
    meettype: string;
    siteId: number;
    adminId: number;
    lastEditAdminId: number;
    userId: number;
    taxis: number;
    meetaddressdesc: string;
    groupNames: Array<string>;
    tagNames: Array<string>;
    sourceId: number;
    referenceId: number;
    templateId: number;
    summary: string;
    author: string;
    source: string;
    top: boolean;
    recommend: boolean;
    hot: boolean;
    color: boolean;
    linkUrl?: string;
    addDate: string;
    id: number;
    guid: string;
    createdDate: string;
    lastModifiedDate: string;
}

// 内容列表返回数据
export interface IContentsResponse {
    totalCount: number;
    contents: Array<IContentResponse>
}