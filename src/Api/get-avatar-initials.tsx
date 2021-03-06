export const getAvatarInitials = (username: string): string => {
	if (username.match(/boomer/i)) {
		return '๐ฅ';
	}
	if (username.match(/hรคnger/i)) {
		return '๐ฎ';
	}
	if (username.match(/asvz/i)) {
		return '๐๏ธ';
	}
	if (username.match(/influencer/i)) {
		return '๐คณ';
	}
	if (username.match(/einstein/i)) {
		return '๐งโ๐ฌ';
	}
	if (username.match(/avocado/i)) {
		return '๐ฅ';
	}
	if (username.match(/woman/i)) {
		return '๐ฉ';
	}
	if (username.match(/girl/i)) {
		return '๐ง';
	}
	if (username.match(/professor/i)) {
		return '๐จโ๐ซ';
	}
	if (username.match(/bqm/i)) {
		return '๐ป';
	}
	if (username.match(/winniepooh/i)) {
		return '๐ป';
	}
	if (username.match(/dรถner/i)) {
		return '๐ฅ';
	}
	if (username.match(/kebab/i)) {
		return '๐ฅ';
	}
	if (username.match(/kebap/i)) {
		return '๐ฅ';
	}
	if (username.match(/chiller/i)) {
		return 'โฑ';
	}
	if (username.match(/kermit/i)) {
		return '๐ธ';
	}
	if (username.match(/420/i)) {
		return '๐';
	}
	if (username.match(/orange/i)) {
		return '๐';
	}
	if (username.match(/abc/i)) {
		return '๐ค';
	}
	if (username.match(/zรผrch/i)) {
		return '๐';
	}
	if (username.match(/zurich/i)) {
		return '๐';
	}
	if (username.match(/uzh/i)) {
		return '๐ซ';
	}
	if (username.match(/banana/i)) {
		return '๐';
	}
	if (username.match(/studi/i)) {
		return '๐';
	}
	if (username.match(/bachelor/i)) {
		return '๐';
	}
	if (username.match(/Iamfirst/i)) {
		return '๐ฅ';
	}
	if (username.match(/biendli/i)) {
		return '๐';
	}
	if (username.match(/2pac/i)) {
		return '๐จ๐ฟโ๐ฆฒ';
	}
	const name = username.toUpperCase().split(' ');
	if (name.length === 1) {
		return `${name[0].charAt(0)}`;
	} else if (name.length > 1) {
		return `${name[0].charAt(0)}${name[1].charAt(0)}`;
	} else {
		return '';
	}
};
