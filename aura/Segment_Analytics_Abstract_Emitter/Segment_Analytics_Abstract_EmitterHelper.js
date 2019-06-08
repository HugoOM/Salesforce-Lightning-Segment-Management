({
	getParsedComponentName: function (cmp) {
		return '[' + cmp.getType().replace(/^\S*:/gi, '') + ']';
	},
	fireSegmentApplicationEvent: function (params) {
		$A.get('e.c:evt_Segment_Analytics')
			.setParams(params).fire();
	},
	segment_Emit_Track: function (cmp, evt, customMessage) {
		this.fireSegmentApplicationEvent({
			type: 'track',
			params: [
				this.getParsedComponentName(cmp) + ' ' + customMessage
			]
		});
	}
	//TODO: Implement event for other Segment methods. See Segment Analytics.js docs for signature
})