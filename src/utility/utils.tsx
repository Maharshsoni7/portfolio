import { IMediaCollections, mediaLinkCollection } from "./constant"

export const mediaLink = (item: keyof IMediaCollections): string | null => {

    let getLink = mediaLinkCollection[item] ? mediaLinkCollection[item] : null
    getLink = item == 'mail' ? `mailto:${getLink}` : getLink
    return getLink
}