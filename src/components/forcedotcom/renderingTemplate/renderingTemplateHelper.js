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
	expand : function(payload, renderVariant) {
        // Following are some options to expand payload into a data object
        // that you can render in your component:
        // 1. Call external third party service(s) 
        // 2. Use Apex controller to obtain data from your Salesforce org
        // 3. Decode the payload, construct a json object and render it

        var dataToRender;
        // dataToRender = ....
        return dataToRender;
	}
})