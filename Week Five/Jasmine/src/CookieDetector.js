// Script to check cookies in the list

function DetectCookie(items) {
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		if(item.toLowerCase().indexOf("cookie") !== -1) {
			return true;
		}
	}
	return false;
}
