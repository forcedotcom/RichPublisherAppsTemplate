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
	init: function (cmp, event, helper) {
        // You can get user input, use that to get the list of options
        // that user can attach with his/her post.
        var input = cmp.get("v.userInput");
        var selectionItems = helper.getOptions(userInput);
        cmp.set("v.selectionItems", selectionItems);
    },
    
    selected: function(cmp, event, helper) {
        // Get the selected list item
        var selectedItem; // = ...;
        $A.util.addClass(selectedItem.getElement(), "selected");

        // Remove "selected" class from previously selected item
        var previousSelectedItem = cmp.get("v.selectedItem");
        if(previousSelectedItem) {
            $A.util.removeClass(previousSelectedItem.getElement(), "selected");
        }

        cmp.set("v.selectedItem", selectedItem);
        
        // Fire following component level event to tell Chatter that user has selected an
        // item to attach with the post. This event will enable the 'Attach' button in composition
        // modal if all the mandatory fields are set correctly.
        var compEvent = cmp.getEvent("sendChatterExtensionPayload");
        compEvent.setParams({
			"payload" : helper.getPayload(selectedItem),
			"extensionTitle" : helper.getTitle(selectedItem),
            "extensionDescription" : helper.getDescription(selectedItem),
            "extensionThumbnailUrl": helper.getThumbnailUrl(selectedItem)
		});
		compEvent.fire(); 
    }
})
