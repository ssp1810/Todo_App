import { Component } from 'react'
import ApiHelper from '../App/Utils/APIHelper'
import { BASE_URL, HTTP_METHODS } from '../App/Configs/AppConfigs'

export default class TodoDataProvider extends Component {
    apiHelper = new ApiHelper(BASE_URL)

    postNotes = async (url, data) => {
        return await this.apiHelper.apiCall(url, HTTP_METHODS.POST, data)
    }

    getNotesList = async (url) => {
        return await this.apiHelper.apiCall(url, HTTP_METHODS.GET)
    }
    
    getNotesById = async (url) => {
        return await this.apiHelper.apiCall(url, HTTP_METHODS.GET)
    }
}
