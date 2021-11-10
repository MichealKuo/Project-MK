export const getComments = async () => {
  return [
    {
      id: '1',
      body: ' Hi,想跟你約時間見見她(他)',
      username: 'Jack',
      userId: '1',
      parentId: null,
      img: 'https://img.onl/5gmGze',
      createdAt: '2021-11-06',
    },
    {
      id: '2',
      body: '好呀，有興趣認養都可以跟我安排時間唷',
      username: 'Host',
      userId: '2',
      parentId: null,
      img: 'https://img.onl/gwnuMO',

      createdAt: '2021-11-09T23:00:33.010+02:00',
    },
    // {
    //   id: '3',
    //   body: 'First comment first child',
    //   username: 'John',
    //   userId: '2',
    //   parentId: '1',
    //   // createdAt: '2021-08-16T23:00:33.010+02:00',
    // },
    // {
    //   id: '4',
    //   body: 'Second comment second child',
    //   username: 'John',
    //   userId: '2',
    //   parentId: '2',
    //   // createdAt: '2021-08-16T23:00:33.010+02:00',
    // },
  ]
}

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: '1',
    username: 'Micheal',
    img: 'https://img.onl/VWWpUj',
    createdAt: new Date().toISOString(),
  }
}

export const updateComment = async (text) => {
  return { text }
}

export const deleteComment = async () => {
  return {}
}
