/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "开始个人博客与技术笔记",
		date: "2026.10.23",
		category: "life",
		subtitle: "技术写作的起点",
		description:
			"发布了我的第一篇文章，并开始记录前端探索、创意编码和个人感悟。",
		tags: ["Blogging", "Writing", "Open Web"],
		icon: "material-symbols:edit-note-rounded",
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
