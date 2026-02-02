// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Xiaomi: [
		{
			name: "Redmi Turbo 3",
			image: "/images/device/t3.jpg",
			specs: "墨晶 / 12G + 256GB",
			description:
				"狂暴引擎3.0，90W闪充，5000mAh电池，120Hz屏幕，5000万主摄",
			link: "https://www.mi.com/prod/redmi-turbo-3",
		},
		{
			name: "小米路由器3G",
			image: "/images/device/bg-top.png",
			specs: "白 / 128MB+256MB",
			description:
				"Openwrt，1000Mbps ，2.4G/5G双频，USB 3.0",
			link: "https://www.mi.com/miwifi3g",
		},
	],
	Huawei: [
		{
			name: "Nova 7 Se",
			image: "/images/device/OIP-C.webp",
			specs: "鸿蒙OS，越用越流畅",
			description:
				"麒麟820 4000Mah电池，6400万主摄",
			link: "https://www.vmall.com/product/10086003450797.html",
		},
	],
};
