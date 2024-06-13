import nextConfig from "../../next.config.mjs";
import Image from "next/image";

const basePath = nextConfig.basePath || "";

export function getStaffImage(name: string) {
  return <Image loader={({ src }) => src} src={`${basePath}/staff/staff_${name}.png`} width="600" height="600" alt="" />
}