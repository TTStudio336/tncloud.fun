/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "recitingUs",
		title: "背书哇！",
		summary:
			"一款帮助中国高中生学习文言文与古诗词的辅助工具，支持 Windows 与 Android。",
		category: "android",
		phase: "exploring",
		technologies: [
			".NET 10",
			"C#",
			"Avalonia",
			"HTML",
			"CSS",
			"JavaScript",
			"SQLite",
		],
		icon: "material-symbols",
		cover: "/assets/projects/recitingUs.png",
		coverAlt: "Reciting Us theme homepage preview",
		featured: true,
		repository: "https://github.com/HelloZWH-0620/reciting-us",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
