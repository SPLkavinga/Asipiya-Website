import { createClient } from "contentful";

const client = createClient({
  space: "geyhinf8uraz",
  accessToken: "Ylxt5eYMraxH05qwsKQs7WEigsyOHl2BoAnOXFVRCXs",
});

export const fetchBlogs = async () => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.blogtitle,
    image: item.fields.image?.fields?.file?.url,
    slug: item.fields.slug,
    content: item.fields.content,
    profileimage: item.fields.profileimage?.fields?.file?.url,
    contentwriter: item.fields.contentwriter,
    date: item.fields.date,
  }));
};




