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
