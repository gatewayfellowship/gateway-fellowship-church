// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    pages: collection({
      label: "Pages",
      slugField: "pageName",
      path: "content/pages/*",
      schema: {
        pageName: fields.slug({ name: { label: "Page Name" } }),
        title: fields.text({
          label: "Title",
          validation: { isRequired: true },
        }),
        subtitle: fields.text({
          label: "Subtitle",
          validation: { isRequired: false },
        }),
        content: fields.markdoc({ label: "Page Content" }),
        imageSrc: fields.image({
          label: "Image",
          directory: "public/images/pageHeros",
          publicPath: "/images/pageHeros/",
          validation: { isRequired: true },
        }),
      },
    }),
    events: collection({
      label: "Events",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Event Name" } }),
        location: fields.text({
          label: "Location",
          validation: { isRequired: true },
        }),
        address: fields.text({
          label: "Address",
        }),
        date: fields.datetime({
          label: "Event date and time",
          description: "The date and time of the event",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({ label: "Content" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
      },
    }),
  },
  singletons: {
    distinctives: singleton({
      label: "Distinctives",
      schema: {
        title: fields.text({
          label: "Our Values Title",
          validation: { isRequired: true },
        }),
        content: fields.array(
          fields.text({
            label: "Distinctive Text",
            validation: { isRequired: true },
            multiline: true,
          })
        ),
      },
    }),
    sermonSeries: singleton({
      label: "Current Sermon Series",
      schema: {
        title: fields.text({
          label: "Series name",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Series description",
          validation: { isRequired: false },
          multiline: true,
        }),
        image: fields.image({
          label: "Series graphic",
          directory: "public/images/sermonSeries",
          publicPath: "/images/sermonSeries/",
          validation: { isRequired: true },
        }),
      },
    }),
    leadership: singleton({
      label: "Leadership",
      schema: {
        title: fields.text({
          label: "Leadership section title",
          validation: { isRequired: true },
        }),
        content: fields.array(
          fields.object({
            name: fields.text({
              label: "Name",
              validation: { isRequired: true },
            }),
            position: fields.text({
              label: "Position/role",
            }),
            bio: fields.text({
              label: "Bio",
              multiline: true,
            }),
            photoSrc: fields.image({
              label: "Photo",
              directory: "public/images/leadership",
              publicPath: "/images/leadership/",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Leadership Team",
            itemLabel: (props) => props.fields.name.value,
          }
        ),
      },
    }),
    beliefs: singleton({
      label: "Beliefs",
      schema: {
        title: fields.text({
          label: "Beliefs section title",
          validation: { isRequired: true },
        }),
        content: fields.array(
          fields.object({
            title: fields.text({
              label: "Belief Title",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
            }),
          }),
          {
            label: "Core Beliefs",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
    sermons: singleton({
      label: "Sermons",
      schema: {
        content: fields.array(
          fields.object({
            title: fields.text({
              label: "Sermon Title",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
            }),
            speaker: fields.text({
              label: "Speaker",
              validation: { isRequired: true },
            }),
            file: fields.file({
              label: "File",
              description: "Audio file of the sermon",
              directory: "public/files/sermons",
              publicPath: "/files/sermons/",
              validation: { isRequired: true },
            }),
            date: fields.date({
              label: "Date",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Sermon Library",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
  },
});
