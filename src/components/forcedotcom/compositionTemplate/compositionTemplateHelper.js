/*
 * Copyright (C) 2017 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
	getOptions : function(payload, renderVariant) {
        // Following are some ways to get selection options
        // 1. Call external third party service(s) 
        // 2. Use Apex controller to obtain data from your Salesforce org
        // 3. Use internal service in your company to obtain a list of your internal business objects

        var selectionItems;
        // selectionItems = ....
        return selectionItems;
    },
    
    getPayload : function(selectedItem) {
        // Convert selectedItem into a payload which will be saved along with the post
        // Payload is a blob that is saved with a feed item. It doesn't matter what you save
        // in payload. It could be an encoded url or a json object or a csv string.
    },

    getTitle : function(selectedItem) {
        // Get the title from the selected item. Title can be used by clients who can't render
        // lightning components.
    },

    getDescription : function(selectedItem) {
        // Get the description from the selected item. Description can be used by clients who can't render
        // lightning components.
    },

    getThumbnailUrl : function(selectedItem) {
        // Get a thumbnail url for the selected item. Thumbnail url can be used by clients who can't render
        // lightning components. This thumbnail url could be specific to the attachment or it can be a generic
        // image for your Rich Publisher App
    }
})