const title = '图片分享社区'

export default function getPageTitle(pageTitle){
    if(pageTitle){
        return `${pageTitle} - ${title}`
    }
    return `${ title }`
}