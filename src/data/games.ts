/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "phigros",
		name: "Phigros",
		developer: "Pigeon Games",
		category: "music",
		status: "completed",
		cover: "assets/games/Phigros-PigeonGames.webp",
		icon: "material-symbols:music-note-rounded",
		rating: 4.9,
		hours: 100,
		platform: "PC",
		year: "2026",
		tags: ["Music", "Rhythm", "Challenging"],
		description:
			"《Phigros》由 Pigeon Games 开发，是一款以节奏判定与高难度谱面为核心的音乐游戏。游戏融合多样化音符、灵活判定线与精美插画，带来强烈的操作感与爽快感。曲库覆盖多种电子音乐风格，拥有大量高质量作品，适合喜欢挑战与音乐节奏的玩家。",
		link: "https://www.taptap.cn/app/165287",
		featured: true,
	},
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 420,
		platform: "PC",
		year: "2026",
		tags: ["Sandbox", "Survival", "Building"],
		description:
			"在这个方块风格的世界中，你可以在程序生成的世界里挖矿、制作物品和建造。努力熬过夜晚，或者继续建造——无论独自一人还是与朋友同行。",
		link: "https://www.minecraft.net/",
	},
	{
		id: "genshin-impact",
		name: "原神",
		developer: "miHoYo",
		category: "action-rpg",
		status: "playing",
		cover: "assets/games/genshin-impact-hero.png",
		icon: "material-symbols:star-rounded",
		rating: 4.8,
		hours: 250,
		platform: "PC",
		year: "2026",
		tags: ["Action RPG", "Open World", "Fantasy"],
		description:
			"在这个充满动作感的开放世界 RPG 中探索提瓦特大陆。驾驭元素魔法，并与同伴并肩作战。",
		link: "https://ys.mihoyo.com/main/",
	},
];
