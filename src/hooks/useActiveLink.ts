import { usePathname } from "next/navigation";

type ReturnType = {
  active: boolean;
  isExternalLink: boolean;
};

export default function useActiveLink(path: string, deep = true): ReturnType {
  const pathname = usePathname();
  const checkPath = path.startsWith("#");

  const normalActive = !checkPath && pathname === path;
  const deepActive = !checkPath && pathname.includes(path);

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: path.includes("http"),
  };
}
