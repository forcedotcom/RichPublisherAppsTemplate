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
        // Obtain payload from 'lightning:availableForChatterExtensionRenderer'.
        var payload = cmp.get("v.payload");
        // Is app being rendered in publisher as a preview or in feed?
        var renderVariant = cmp.get("v.variant");

        // Get the data to render which is keyed by the payload. dataToRender may or may not
        // differ based on the renderVariant.
        var dataToRender = helper.expand(payload, renderVariant);
        cmp.set("v.renderThis", dataToRender);
	}
})
