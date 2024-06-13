import Image from "next/image";

export function getStaffImage(name: string) {
  return <Image loader={({ src }) => src} src={`/staff/staff_${name}.png`} width="600" height="600" alt="" />
}