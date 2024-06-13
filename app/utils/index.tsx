import Image from "next/image";
import getConfig from "next/config";

const { basePath } = getConfig().publicRuntimeConfig;

export function getStaffImage(name: string) {
  return <Image loader={({ src }) => src} src={`${basePath}/staff/staff_${name}.png`} width="600" height="600" alt="" />
}