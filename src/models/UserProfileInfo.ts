import { attribute, autoGeneratedHashKey } from "@aws/dynamodb-data-mapper-annotations"

export class UserProfileInfo{
    @autoGeneratedHashKey()
    Id: string
    @attribute()
    Username: string
    @attribute()
    Fullname: string
    @attribute()
    DisplayPictureURL?: string //Image should proabably be small 
    @attribute()
    ProfileUrl: string
}