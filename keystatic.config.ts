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
        content: fields.markdoc({ label: "Page Content" }),
        imageSrc: fields.image({
          label: "Image",
          directory: "public/images/pageHeros",
          publicPath: "/images/pageHeros/",
          validation: { isRequired: true },
        }),
      },
    }),
    sermonSeries: collection({
      label: "Sermon Series",
      slugField: "title",
      path: "content/sermons/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: { label: "Sermon Series Title" },
        }),
        imageSrc: fields.image({
          label: "Series Image",
          directory: "public/images/sermonSeries",
          publicPath: "/images/sermonSeries/",
        }),
        startDate: fields.date({
          label: "Series Start Date",
          validation: { isRequired: true },
        }),
        sermons: fields.array(
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
            label: "Sermons",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
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
    currentSeries: singleton({
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
          directory: "public/images/currentSeries",
          publicPath: "/images/currentSeries/",
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
    thingsToKnow: singleton({
      label: "Things to Know",
      schema: {
        title: fields.text({
          label: "Things to Know section title",
          validation: { isRequired: true },
        }),
        content: fields.array(
          fields.object({
            title: fields.text({
              label: "Title",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Things to Know",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
    welcomeItems: singleton({
      label: "Home Page Welcome Items",
      schema: {
        title: fields.text({
          label: "Welcome section title",
          validation: { isRequired: true },
        }),
        content: fields.array(
          fields.object({
            title: fields.text({
              label: "Title",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
              validation: { isRequired: true },
            }),
            image: fields.image({
              label: "Welcome Item Image",
              directory: "public/images/welcomeItems",
              publicPath: "/images/welcomeItems/",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "What to Expect",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
    ministries: singleton({
      label: "Ministries",
      schema: {
        content: fields.array(
          fields.object({
            title: fields.text({
              label: "Ministry Name",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Ministry Description",
              multiline: true,
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Ministry",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
    services: singleton({
      label: "Services",
      schema: {
        content: fields.array(
          fields.object({
            dayOfWeek: fields.text({
              label: "Day of the week (Sundays, Wednesdays, etc.)",
              validation: { isRequired: true },
            }),
            serviceTypes: fields.array(
              fields.object({
                name: fields.text({
                  label: "Name of service",
                  validation: { isRequired: true },
                }),
                time: fields.text({
                  label:
                    "Time(s) of day (i.e. 10am & 6pm or a single time of day)",
                  validation: { isRequired: true },
                }),
              }),
              {
                label: "Service Types",
                itemLabel: (props) => props.fields.name.value,
              }
            ),
          }),
          {
            label: "Services",
            itemLabel: (props) => props.fields.dayOfWeek.value,
          }
        ),
      },
    }),
  },
});
